export default async function ProductReview({
    params,
}: {
    params: { productId: string; reviewsId: string };
}) {
    const { productId, reviewsId } = params;
    return (
        <h1>
            review {reviewsId} for product {productId}
        </h1>
    );
}