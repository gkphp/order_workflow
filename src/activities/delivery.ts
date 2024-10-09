// import { sleep } from '@temporalio/workflow';

export async function deliveryConfirmation(): Promise<any> {
  try {
    console.log('Delivery progress ...');
    // await sleep(10000);
    return 'Delivery confirmation sent successfully.';
  } catch (e) {
    return Promise.reject(e);
  }
}
