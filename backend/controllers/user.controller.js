export const getUserProfileAndRepos = async(req, res) => {
 
     const {username} = req.params;
    try {
    const userRes = await fetch(`https://api.github.com/users/${username}`,{
        headers: {
          authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      });

    //   if (!userRes.ok) throw new Error("User not found!");
      const userProfile = await userRes.json();
      ;

    //   if (!userProfile.repos_url) throw new Error("Repos not found!");

      const repoRes = await fetch(userProfile.repos_url,{
        headers: {
            authorization: `token ${process.env.GITHUB_API_KEY}`,
          },
      });
    //   if (!repoRes.ok) throw new Error("Failed to fetch repos!");
      const repos = await repoRes.json();

      res.status(200).json({ userProfile, repos});
 } catch (error) {
    res.status(500).json({ error: error.message });
 }
   
}