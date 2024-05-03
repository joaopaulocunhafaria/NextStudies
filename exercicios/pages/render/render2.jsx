import productList from "@/data/productList";

export default function render2() {





    return (<>
        <table   style={{border:"1px solid #fff"}}>


            <thead>
                <tr>
                    <th  style={{border:"1px solid #fff"}}>Code</th>
                    <th  style={{border:"1px solid #fff"}}>Name</th>
                    <th  style={{border:"1px solid #fff"}}>Price</th>
                </tr>
            </thead>
            <tbody >
                {renderProducts()}
            </tbody>

        </table>

    </>)
}


function renderProducts() {



    return productList.map((product) => {
        return (<>
            <tr key={product.id}>
                <td  style={{border:"1px solid #fff"}}>{product.id}</td>
                <td  style={{border:"1px solid #fff"}}>{product.name}</td>
                <td  style={{border:"1px solid #fff"}}>{product.price}</td>
            </tr>
        </>)
    })


}