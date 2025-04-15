export default async function ProductReview({ params }: { params: { productId: string, reviewsId: string } }) {
    return (
        <main>
            <h1>Product {params.productId}</h1>
            <h2>Review {params.reviewsId}</h2>
            <p>Details about review {params.reviewsId} for product {params.productId}</p>
        </main>
    )
}