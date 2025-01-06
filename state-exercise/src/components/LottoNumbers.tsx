type Lotto = {
    number: () =>  void
}
const LottoNumbers = ({number}: Lotto) => {
    return(
        <div>
            <button onClick={number}>Generate Lotto Numbers</button>
        </div>
    )
}

export default LottoNumbers