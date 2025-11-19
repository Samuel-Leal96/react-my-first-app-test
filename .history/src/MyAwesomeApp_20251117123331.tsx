
export function MyAwesomeApp() {

    const firstName = "Samuel"
    const lastName = "Leal"

    const favoriteGames = ["Halo", "LoL", "Tibia", "CoD"]

    return (
        <>
            <h1> {firstName} </h1>
            <h3> {lastName} </h3>

            <p>{favoriteGames.join(', ')}</p>
        </>
    )
}
