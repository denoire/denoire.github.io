export default function Sidebar() {
    const sections = ["about", "literature", "activities", "inspirations", "closing"];

    return (
        <nav className="
            z-1
            border border-red-500
            fixed flex items-center
            left-6 top-1/2 -translate-y-1/2 h-2/3
            "
        >
            <ul className="border border-red-500 flex flex-col text-center space-y-15">
                {sections.map((section) => (
                    <li key={section}>
                        <a
                            href={`#${section}`}
                            className="border border-red-500 text-sm hover:underline"
                        >
                            {section}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
