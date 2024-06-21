export type ProcessFn<Param> = (item: Param, idx?: number) => Promise<unknown>;

export async function batchInsertItems<Item>(
  items: Item[],
  func: ProcessFn<Item>,
) {
  const errors: Array<{ item: Item; error: unknown }> = [];
  let i = 0;
  const workers = async () => {
    while (i < items.length) {
      const item = items[i++];
      try {
        await func(item!);
      } catch (error) {
        if (!item) {
          throw new Error('Could not process item');
        }

        errors.push({ item, error });
      }
    }
  };

  const promises = Array.from({ length: 25 }).fill(null).map(workers);

  await Promise.all(promises);
  return errors;
}
