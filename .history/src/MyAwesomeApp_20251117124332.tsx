
export function MyAwesomeApp() {

    const firstName = "Samuel"
    const lastName = "Leal"

    const favoriteGames = ["Halo", "LoL", "Tibia", "CoD"]

    const isActive = true;

    const address = {
        'street': 'Calle principal',
        'country': 'Mexico'
    }

    return (
        <>
            <h1> {firstName} </h1>
            <h3> {lastName} </h3>

            <p>{favoriteGames.join(', ')}</p>

            <h1>{isActive ? 'Activo' : 'False'}</h1>

            <p
                style={{
                    backgroundColor: '#fafafa',
                    borderRadius: 10,
                    padding: 10
                }}
            >{JSON.stringify(address)}</p>
        </>
    )
}
