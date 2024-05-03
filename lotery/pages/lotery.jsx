import { useState } from "react"

export default function lotery() {

    const [numbers, setNumbers] = useState(6);
    const [sortNumbers, setSortNumbers] = useState([]);
    const [divs, setDivs] = useState([])


    function generateSortNumbers(quantity) {

        console.log(quantity);

        const auxArray = []
        for (let i = 0; i < quantity; i++) {
            auxArray.push(Math.floor(Math.random() * 60))
        }
        console.log(auxArray);
        setSortNumbers(auxArray);
        console.log(sortNumbers);
        generateDivs(sortNumbers)
    }


    function generateDivs(sortNumbers) {
        var auxArray = [];

        for (let i = 0; i < sortNumbers.length; i++) {
            auxArray.push(
                <div key={i} style={{
                    height: "60px",
                    width: "60px",
                    borderRadius: "30px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    color: "black",
                    fontFamily: "sans-serif",

                }}>

                    <h1>{sortNumbers[i]}</h1>
                </div>

            )
        }

        setDivs(auxArray);
    }

    return (<>

        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",

            height: "100hv",
            backgroundColor: "gray"
        }}>
            <h1 style={{ fontFamily: "sans-serif", color: "white" }}>Lotery</h1>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap:"wrap"
                }}
            > {divs}</div>

            <div style={{
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column"
            }}>

                <label htmlFor="number">How many numbers</label><input onChange={e => setNumbers(e.target.value)} type="number" name="number" id="number" min={6} max={15}/>

            </div>
            <button style={{
                backgroundColor: "blueviolet",
                borderRadius: "25px",
                height: "50px",
                width: "150px",
                color: "white",
                fontFamily: "sans-serif"
            }}
                onClick={() => {
                    generateSortNumbers(numbers)
                }}
            >Sort numbers</button>





        </div>



    </>)


}

