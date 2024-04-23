declare module '*.svg' {
    const content: ReactComponent<SVGProps<SVGSVGElement>>;
    export default content;
}

declare module "*.png" {
    const value: any;
    export = value;
}