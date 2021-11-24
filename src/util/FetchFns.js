export const DeleteFromDB = async (url, key, setError) => {
  const specificUrl = `${url}/${key}.json`;
  try {
    await fetch(specificUrl, {
      method: "DELETE",
    });
    setError(null);
    console.log("delete request sent");
  } catch (e) {
    setError("Couldn't delete data to the cloud 👩🏻‍🚒");
    console.error("delete from firebase error");
  }
};

export const PostToDB = async (url, id, data, setError) => {
  const specificUrl = `${url}/ipss/users/${id}.json`;
  try {
    await fetch(specificUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setError(null);
  } catch (e) {
    setError("Couldn't save data to the cloud 👩🏻‍🚒");
    console.error("fetch to firebase error");
  }
};
