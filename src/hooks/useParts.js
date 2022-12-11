import { useEffect, useState } from "react"

const useParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://car-nation-server.up.railway.app/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [parts])
    return [parts, setParts];
}
export default useParts;