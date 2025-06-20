import "./globals.css";

export const metadata = {
    title: "",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/images/corridor-of-memories_icon.png"/>
            <title>Thomas&apos; Personal Pages</title>
        </head>
        <body>{children}</body>
        </html>
    );
}
