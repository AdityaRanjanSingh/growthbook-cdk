#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { GrowthbookCdkStack } from '../lib/growthbook-cdk-stack';

const app = new cdk.App();
new GrowthbookCdkStack(app, 'GrowthbookCdkStack');
