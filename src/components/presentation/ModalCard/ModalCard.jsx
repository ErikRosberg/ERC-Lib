import React, { useState, useEffect } from "react";

// Styles
const Container = styled.tr`
    display: flex;
    align-items: space-between;
    justify-content: space-between;

    > td {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    > td > img {
        height: 1.4rem;
        width: 1.4rem;
        margin: 0.3rem 0.3rem;
    }
`;

// Toaster Card Function
const notify = (permSelection, nameOfUser) => {
    toast(nameOfUser + "s permission set to: " + permSelection, {
        transition: Flip,
        position: "bottom-right",
        autoClose: 850,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
};

// Styles
const TR_IN_USERPERMS = {
    display: "flex",
    justifyContent: "space-between",
};
const ANCHOR_STYLE = {
    cursor: "pointer",
};
const CARD_STYLE = {
    border: "1.5px solid grey",
    padding: "1rem",
    overflow: "auto",
};
const TBODY_STYLE = {
    height: "80vh",
    flexDirection: "column",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "space-between",
};
const TR_STYLE = {
    margin: "0 1rem",
};

export default function ModalCard({
    type,
    data,
    selectionUniqueUrl,
    permissions,
    openNewStructureFromMC,
    sendStructureDataToParent,
    sendPermissionsToParent,
}) {
    // States for...
    //...Data
    const [usersWithPermission, setUsersWithPermission] = useState([]);

    // ... Opening Modals
    const [addUserPermissions, setAddUserPermissions] = useState(false);

    // --- Loading data ---
    // Serializing permissions to permObjs
    const loadUsersWithPermission = async () => {
        var users = data.Users;

        var perms = [];
        perms = users.map((user) => {
            for (let perm in permissions) {
                if (
                    perm === "$type" ||
                    perm === "Structure" ||
                    permissions[perm].length === 0
                ) {
                    continue;
                }

                for (let id of permissions[perm]) {
                    if (id === user.Id) {
                        return {
                            user: user,
                            fromUrl:
                                permissions.Structure
                                    .StructureItemUniqueFriendlyUrl,
                            permission: perm,
                        };
                    }
                }
            }
        });

        await getUserInheritedPermission(permissions.Structure, perms);

        setUsersWithPermission([...perms]);
    };
    // Recursive god function
    const getUserInheritedPermission = async (parentAndUrl, inheritedPerms) => {
        let parentUrl = parentAndUrl.ParentUrl;
        var permResponse;

        if (parentUrl === "firesafes-sba-portal") {
            return inheritedPerms;
        } else {
            permResponse = await getPermissionsForStructureItem(parentUrl);
            var parentPerms = permResponse.responseData;

            data.Users.forEach((user, index) => {
                for (let perm in parentPerms) {
                    if (
                        perm === "$type" ||
                        perm === "Structure" ||
                        parentPerms[perm].length === 0
                    ) {
                        continue;
                    }

                    for (let id of parentPerms[perm]) {
                        if (id === user.Id && inheritedPerms !== undefined) {
                            inheritedPerms[index] = {
                                user: user,
                                fromUrl: parentUrl,
                                permission: perm,
                            };
                        }
                    }
                }
            });

            await getUserInheritedPermission(
                parentPerms.Structure,
                inheritedPerms
            );
        }
    };
    // Calling loadUsers
    useEffect(() => {
        if (type === "users") loadUsersWithPermission();
    }, [permissions]);

    // Renders
    const renderAddUserPermission = () => {
        if (usersWithPermission.length === 0) return;
        let userWOPermission = data.Users.filter((user) => {
            for (let userWithPerm of usersWithPermission) {
                if (userWithPerm === undefined) continue;

                if (user.Id === userWithPerm.user.Id) {
                    return false;
                }
            }

            return true;
        });

        return (
            <>
                {userWOPermission.length !== 0 ? (
                    userWOPermission.map((user, index) => (
                        <tr key={index} style={TR_IN_USERPERMS}>
                            <td>{user.FirstName + " " + user.LastName}</td>
                            <td>
                                <GustavFancyMenu
                                    setFilteredUsers={setUsersWithPermission}
                                    setPermissions={sendPermissionsToParent}
                                    user={user}
                                    structure={data}
                                    selectionUniqueUrl={selectionUniqueUrl}
                                    notify={notify}
                                />
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>Inga användare hittades</td>
                    </tr>
                )}
                <tr>
                    <td>
                        <ToastContainer />
                    </td>
                </tr>
            </>
        );
    };
    const renderHeader = () => {
        if (type === "users") {
            return (
                <>
                    <button onClick={() => setAddUserPermissions(true)}>
                        Användarrättigheter
                    </button>
                </>
            );
        } else if (type === "structure") {
            return (
                <>
                    <button onClick={() => console.log("Kopiera Kod Från MVC")}>
                        Skapa Struktur
                    </button>
                </>
            );
        }
    };
    const renderRows = () => {
        // ------------- STRUCTURE --------------
        if (type === "structure") {
            if (
                data.Children !== undefined &&
                data.Children !== null &&
                data.Children.length > 0
            ) {
                return (
                    <table>
                        <tbody>
                            {data.Children.map((structure, index) => (
                                <tr key={structure.StructureItemId}>
                                    <td>
                                        <a
                                            style={ANCHOR_STYLE}
                                            onClick={() =>
                                                navigateToStuctureClicked(
                                                    structure
                                                )
                                            }
                                        >
                                            {structure.Name}
                                        </a>
                                        <button
                                            onClick={() =>
                                                handleRemoveStructureClick(
                                                    removeStructure(data, index)
                                                )
                                            }
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                );
            } else {
                return (
                    <tr>
                        <td>Inga underliggande strukturer</td>
                    </tr>
                );
            }
        }

        // Users
        else if (type === "users") {
            if (
                usersWithPermission !== null &&
                usersWithPermission.length > 0
            ) {
                return (
                    <div>
                        <table style={{ display: "flex" }}>
                            <tbody style={{ flex: "1" }}>
                                {usersWithPermission.map(
                                    (permObj, index) =>
                                        permObj !== undefined && (
                                            <Container key={index}>
                                                <td>
                                                    <a
                                                        style={ANCHOR_STYLE}
                                                        onClick={() =>
                                                            console.log(
                                                                "works!"
                                                            )
                                                        }
                                                    >
                                                        {permObj.user
                                                            .FirstName +
                                                            " " +
                                                            permObj.user
                                                                .LastName}
                                                    </a>
                                                </td>
                                                <td
                                                    style={{
                                                        opacity:
                                                            permObj.fromUrl ===
                                                            selectionUniqueUrl
                                                                ? "1"
                                                                : "0.2",
                                                    }}
                                                >
                                                    <img
                                                        src={checkPermissions(
                                                            permObj.user.Id,
                                                            permObj.permission
                                                        )}
                                                    />
                                                    <a
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                        onClick={
                                                            permObj.fromUrl ===
                                                            selectionUniqueUrl
                                                                ? () =>
                                                                      handlePermissionRemoved(
                                                                          permObj
                                                                              .user
                                                                              .Id
                                                                      )
                                                                : () =>
                                                                      navigateToStuctureClicked(
                                                                          permObj.fromUrl
                                                                      )
                                                        }
                                                    >
                                                        X
                                                    </a>
                                                </td>
                                            </Container>
                                        )
                                )}
                            </tbody>
                        </table>
                    </div>
                );
            } else {
                // if no users
                return <p>Inga användarrättigheter</p>;
            }
        }
    };

    // Handlers
    const handlePermissionRemoved = (userId) => {
        let filtered = usersWithPermission.filter((permObj) => {
            if (permObj === undefined) {
                return false;
            }

            if (permObj.user.Id !== userId) {
                return true;
            } else {
                return false;
            }
        });

        setUsersWithPermission([...filtered]);

        // remove an ID
        sendPermissionsToParent((prev) => {
            for (let perm in prev) {
                if (perm == "" || perm == "Structure") continue;

                for (let id of prev[perm]) {
                    if (id === userId) {
                        prev[perm].pop(id);
                    }
                }
            }

            return { ...prev };
        });
    };
    const navigateToStuctureClicked = async (structure) => {
        if (typeof structure === "string") {
            console.log("not and obj, getting obj from stringUrl");
            var get = await getStructureItemByUniqueUrl(structure);
            openNewStructureFromMC(get.responseData);
        } else {
            openNewStructureFromMC(structure);
        }
    };
    const checkPermissions = (userId, permission) => {
        switch (permission) {
            case "Blocked":
                return removeBlock;
            case "PropAdmins":
                return removePropAdmin;
            case "Admins":
                return removeAdmin;
            case "Editors":
                return removeEditor;
        }
    };
    const handleRemoveStructureClick = (structure) => {
        //setStructureData(structure)
        sendStructureDataToParent(structure);
    };

    return (
        <>
            <ModalPopup
                open={addUserPermissions}
                onClose={() => setAddUserPermissions(false)}
                lowerLevelModal={true}
            >
                <div>
                    <h4>
                        {data.Users.length !== 0
                            ? "Användare som inte tilldelats rättigheter"
                            : "Inga användare hittades"}
                    </h4>
                    <div style={{ width: "75vw" }}>
                        <table style={{ flex: "1" }}>
                            <tbody style={TBODY_STYLE}>
                                {renderAddUserPermission()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </ModalPopup>

            <div style={CARD_STYLE}>
                {type === "users" ? "Rättigheter för användare" : "Struktur"}
                <div style={{ display: "flex" }}>
                    <TextInput placeholder={"sök"}></TextInput>
                    {renderHeader()}
                </div>
                {renderRows()}
            </div>
        </>
    );
}
