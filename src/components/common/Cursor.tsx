export default function CursorTest() {
    return (
        <div
            style={{
                height: "100vh",
                cursor: "url('/left-and-right-arrows.png'), auto"
            }}
            className="bg-gray-800 text-white flex items-center justify-center"
        >
            Hover here to test cursor
        </div>
    );
}
  