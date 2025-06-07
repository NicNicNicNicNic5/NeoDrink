export default async function ProductDetailPage({ params }) {
    const { productId } = await params
    return (
        <div className="container">
          <h1>Product: {productId}</h1>
        </div>
      );
}