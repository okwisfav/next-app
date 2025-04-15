export default function Product({ params }: { params: { productId: string } }) {
    return (
        <main>
            <h1>Product {params.productId}</h1>
            <h2>Product details</h2>
            <p>Details about product {params.productId}</p>
        </main>
    )
}