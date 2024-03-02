
# AWS CDK TypeScript Project Guide

This guide provides an overview of developing AWS infrastructure using the AWS Cloud Development Kit (CDK) with TypeScript. It focuses on setting up your local environment, deploying a network stack and a server stack to AWS, and includes initial setup steps for the AWS CLI.

## Initial Setup

Before you start, ensure you have the following prerequisites installed:

- Node.js and npm
- AWS CLI
- AWS CDK

### Configuring the AWS CLI

1. Install the AWS CLI following the instructions at [https://aws.amazon.com/cli/](https://aws.amazon.com/cli/).
2. Configure the AWS CLI with your credentials:
   ```bash
   aws configure
   ```
   Provide your AWS Access Key ID, Secret Access Key, default region name, and default output format as prompted.

## Project Setup

Initialize your CDK project:

- Navigate to your project directory and run:
  ```bash
  cdk init app --language=typescript
  ```
- Install dependencies:
  Still in your project directory, install necessary packages:
  ```bash
  npm install aws-cdk-lib constructs
  ```
- Add specific AWS service packages as needed, for example:
  ```bash
  npm install @aws-cdk/aws-ec2 @aws-cdk/aws-rds
  ```

## Architecture

This project is split into two main stacks:

- **Network Stack**: Sets up the VPC, including public and private subnets across two availability zones.
- **Server Stack**: Deploys EC2 instances within the public subnets and an RDS MySQL instance within the private subnet. It also configures security groups for web access and database access.

## Deployment Process

- Compile TypeScript to JavaScript:
  ```bash
  npm run build
  ```
- Deploy the stacks to AWS:
  Use the CDK deploy command to deploy your stacks:
  ```bash
  npx cdk deploy --all
  ```
  This command deploys all stacks in your CDK application to your default AWS account and region.

## Useful Commands

- `npm run watch`: Watches for changes and compiles TypeScript to JavaScript in real-time.
- `npm run test`: Performs the Jest unit tests.
- `npx cdk diff`: Compares the deployed stack with the current state.
- `npx cdk synth`: Emits the synthesized CloudFormation template.

## Cleanup

To avoid incurring future charges, remember to delete the resources once you are done:
```bash
npx cdk destroy --all
```

## Conclusion

This code provides a basic structure for developing infrastructure with AWS CDK using TypeScript. Customize the stacks as per your requirements and deploy scalable, reliable AWS infrastructure with ease.
