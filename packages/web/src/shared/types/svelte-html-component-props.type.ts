export type Component<T1 extends EventTarget> = Omit<
  svelte.JSX.HTMLProps<T1>,
  'class'
>;
