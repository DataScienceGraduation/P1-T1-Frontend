declare module '*.svg' {
    const content: ReactComponent<SVGProps<SVGSVGElement>>;
    export default content;
}

declare module '*.png' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const value: any;
    export = value;
}
