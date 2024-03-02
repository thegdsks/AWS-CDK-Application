
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

## License

The code within this project is dual-licensed under the GLINCKER LLC proprietary license and the MIT License. This means it is open for reference and educational purposes, allowing for use, modification, and distribution in accordance with the MIT License's terms, while also respecting the proprietary rights and restrictions under the GLINCKER LLC license.

### MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
