import { proxyActivities, sleep } from '@temporalio/workflow';
// Only import the activity types
import * as activities from './activities/activities';
// import { deliveryConfirmation } from './activities/deliveryConfirmation';
// import { orderCreation } from './activities/orderCreation';
// import { orderProcessing } from './activities/orderProcessing';
// import { shippingConfirmation } from './activities/shippingConfirmation';
import * as delivery from './activities/delivery';
import * as orderProcess from './activities/orderProcessing';
import * as orderCreate from './activities/orderCreation';
import * as shipping from './activities/shippingConfirmation';

const { greet } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});
const { deliveryConfirmation } = proxyActivities<typeof delivery>({
  startToCloseTimeout: '1 minute',
});
const { orderProcessing } = proxyActivities<typeof orderProcess>({
  startToCloseTimeout: '1 minute',
});
const { orderCreation } = proxyActivities<typeof orderCreate>({
  startToCloseTimeout: '1 minute',
});
const { shippingConfirmation } = proxyActivities<typeof shipping>({
  startToCloseTimeout: '1 minute',
});

/** A workflow that simply calls an activity */
export async function example(name: string): Promise<any> {
  await greet(name);
  const orderResult = await orderCreation();
  await sleep(10000);
  const orderProcessingResult = await orderProcessing();
  await sleep(10000);
  const shippingResult = await shippingConfirmation();
  await sleep(10000);
  const deliveryResult = await deliveryConfirmation();
  return `Result: ${orderResult}, ${orderProcessingResult}, ${shippingResult}, ${deliveryResult}`;
}
