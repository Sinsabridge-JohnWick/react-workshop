export default function TabButton({ children, onSelect }) {

    function handleClick() {
        console.log("hi");

    }

    return (
        <li><button onClick={onSelect}>{children}</button></li>
    )
}