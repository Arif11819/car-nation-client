import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const url = 'https://car-nation-server.up.railway.app/reviews';

        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])
    return [reviews, setReviews];
}
export default useReviews;