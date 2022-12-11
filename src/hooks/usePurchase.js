import { useEffect, useState } from "react";
const usePurchase = partsId => {
    const [parts, setParts] = useState({});

    useEffect(() => {
        const url = `https://car-nation-server.up.railway.app/parts/${partsId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data));
    }, [partsId]);
    return [parts, setParts];
}
export default usePurchase;