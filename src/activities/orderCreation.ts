// import { sleep } from '@temporalio/workflow';

export async function orderCreation(): Promise<any> {
  try {
    console.log('Order creating ...');
    // await sleep(10000);
    return 'Order created successfully.';
  } catch (e) {
    return e;
  }
}
