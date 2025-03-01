const DetailsPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return (
        <div>
            <h1>Đây là trang chi tiết {id}</h1>
        </div>
    )
}
export default DetailsPage;