import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const url = 'https://secure-fjord-78595.herokuapp.com/reviews';

        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])
    return [reviews, setReviews];
}
export default useReviews;