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
            <ul className="absolute left-5 h-full text-sm">
                {sections.map((id, i) => (
                    <li key={id}
                        style={{
                            position: 'absolute',
                            top: `${(i / (sections.length - 1)) * 100}%`,
                            transform: 'translateY(-50%)',
                        }}
                    >
                        <a href={`#${id}`} className="hover:underline">
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
