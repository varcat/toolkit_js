type PartialTuple<
  TUPLE extends any[],
  EXTRACTED extends any[] = []
> = TUPLE extends [infer NEXT_PARAM, ...infer REMAINING]
  ? PartialTuple<REMAINING, [...EXTRACTED, NEXT_PARAM?]>
  : [...EXTRACTED, ...TUPLE];

type PartialParameters<FN extends (...args: any[]) => any> = PartialTuple<
  Parameters<FN>
>;

type RemainingParameters<
  PROVIDED extends any[],
  EXPECTED extends any[]
> = EXPECTED extends [infer E1, ...infer EX]
  ? PROVIDED extends [infer P1, ...infer PX]
    ? P1 extends E1
      ? RemainingParameters<PX, EX>
      : never
    : EXPECTED
  : [];

type CurriedFunctionOrReturnValue<
  PROVIDED extends any[],
  FN extends (...args: any[]) => any
> = RemainingParameters<PROVIDED, Parameters<FN>> extends [any, ...any[]]
  ? CurriedFunction<PROVIDED, FN>
  : ReturnType<FN>;

type CurriedFunction<
  PROVIDED extends any[],
  FN extends (...args: any[]) => any
> = <
  NEW_ARGS extends PartialTuple<RemainingParameters<PROVIDED, Parameters<FN>>>
>(
  ...args: NEW_ARGS
) => CurriedFunctionOrReturnValue<[...PROVIDED, ...NEW_ARGS], FN>;

export function currying<
  FN extends (...args: any[]) => any,
  STARTING_ARGS extends PartialParameters<FN>
>(
  targetFn: FN,
  ...existingArgs: STARTING_ARGS
): CurriedFunction<STARTING_ARGS, FN> {
  return function (...args) {
    const totalArgs = [...existingArgs, ...args];
    if (totalArgs.length >= targetFn.length) {
      return targetFn(...totalArgs);
    }
    return currying(targetFn, ...(totalArgs as PartialParameters<FN>));
  };
}
