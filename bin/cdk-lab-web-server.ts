#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { NetworkStack } from '../lib/network-stack';
import { ServerStack } from '../lib/server-stack';

const app = new cdk.App();

const networkStack = new NetworkStack(app, 'NetworkStack', {
  /* StackProps */
});

const serverStack = new ServerStack(app, 'ServerStack', {
  vpc: networkStack.vpc,
});
