export default function Sidebar() {
    const sections = ["about", "chapter1", "chapter2", "chapter3", "closing"];

    return (
        <nav className="
            border border-red-500
            fixed flex items-center
            left-6 top-1/2 -translate-y-1/2 h-2/3
            "
        >
            sidebar
        </nav>
    );
}
