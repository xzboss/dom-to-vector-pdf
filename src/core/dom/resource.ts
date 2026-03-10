export async function waitForResources(
  element: HTMLElement | SVGElement,
  resourceTimeout?: number
): Promise<PromiseSettledResult<void>[]> {
  const queue: Promise<void>[] = [];
  const timeout = resourceTimeout ?? 5000;
  const resources = element.querySelectorAll('img');

  resources.forEach((resource) => {
    queue.push(
      new Promise((resolve) => {
        let done = false;
        resource.onload = () => {
          done = true;
          resolve(resource.src as unknown as void | PromiseLike<void>);
        };
        resource.onerror = () => {
          done = true;
          resolve();
        };
        setTimeout(() => {
          if (!done) {
            resolve(void 0);
          }
        }, timeout);
      })
    );
  });

  return Promise.allSettled(queue);
}
