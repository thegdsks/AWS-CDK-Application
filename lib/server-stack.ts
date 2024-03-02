import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';

interface ServerStackProps extends cdk.StackProps {
  vpc: ec2.IVpc;
}

export class ServerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: ServerStackProps) {
    super(scope, id, props);

    const webServerSg = new ec2.SecurityGroup(this, 'WebServerSG', {
      vpc: props.vpc,
      description: 'Allow HTTP access',
      allowAllOutbound: true,
    });
    webServerSg.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(80),
      'Allow HTTP traffic'
    );

    const rdsSg = new ec2.SecurityGroup(this, 'RDSSG', {
      vpc: props.vpc,
      description: 'Allow MySQL server access',
      allowAllOutbound: true,
    });
    rdsSg.addIngressRule(
      webServerSg,
      ec2.Port.tcp(3306),
      'Allow MySQL traffic'
    );

    // Example of deploying two web servers
    for (let i = 1; i <= 2; i++) {
      new ec2.Instance(this, `WebServer${i}`, {
        vpc: props.vpc,
        instanceType: new ec2.InstanceType('t3.micro'),
        machineImage: new ec2.AmazonLinuxImage(),
        securityGroup: webServerSg,
      });
    }

    new rds.DatabaseInstance(this, 'MyRDSInstance', {
      engine: rds.DatabaseInstanceEngine.mysql({
        version: rds.MysqlEngineVersion.VER_8_0_35,
      }),
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.BURSTABLE2,
        ec2.InstanceSize.MICRO
      ),
      vpc: props.vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_WITH_NAT,
      },
      securityGroups: [rdsSg],
    });
  }
}
