import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

// Fetch the top freelancers based on ranking points
export const getLeaderboard = async () => {
    try {
        const leaderboardRef = collection(db, "users");
        const q = query(leaderboardRef, orderBy("rankingPoints", "desc"));
        const querySnapshot = await getDocs(q);

        const leaderboard = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return leaderboard;
    } catch (error) {
        console.error("Error fetching leaderboard:", error);
        return [];
    }
};
