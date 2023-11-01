import { useUserAuth } from "./_utils/auth-context";
 
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

async function handleSignIn() {

    try {
        await gitHubSignIn();
    }
    catch (error) {
        console.log(error);
    }
}

async function handleSignOut() {

    try {
        await firebaseSignOut();
    }
    catch (error) {
        console.log(error);
    }
}
 
return (
    <main>
        <header>
            <h1>Login Page</h1>
        </header>
        <section>
            { user ? (
                <div>
                    <p>
                        Welcome, {user.displayName} ({user.email})
                    </p>;
                    <button className="text-lg m-2 hover:underline" onClick={handleSignOut}>
                        Sign Out
                    </button>
                </div>
            ) : (
                <div>
                    <button className="text-lg m-2 hover:underline" onClick={handleSignIn}>
                        Sign In
                    </button>
                </div>
            ) }
        </section>
    </main>
)