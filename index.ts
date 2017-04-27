/// <reference types="aws-sdk" />
import AWS = require('aws-sdk');
import * as request from 'request';

interface IAWSEvent {}
interface IContext {}

function publish(): Promise<any> {
  return new Promise((resolve, reject) => {
    const sns: AWS.SNS = new AWS.SNS();
    let params: AWS.SNS.PublishInput = {
      Subject: 'test',
      Message: 'test message',
    };
  });
}

export function handler(event: any, context: any, callback: Function): void {
  callback(null, 'success');
};
