// import { sleep } from '@temporalio/workflow';

export async function shippingConfirmation(): Promise<any> {
  try {
    console.log('Shipping progress ...');
    // await sleep(200);
    return 'Shipping confirmation sent successfully.';
  } catch (e) {
    return e;
  }
}
