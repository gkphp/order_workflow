// import { sleep } from '@temporalio/workflow';

export async function orderProcessing(): Promise<any> {
  try {
    console.log('Order processing ... ');
    // await sleep(10000);
    return 'Order processed successfully.';
  } catch (e) {
    return e;
  }
}
