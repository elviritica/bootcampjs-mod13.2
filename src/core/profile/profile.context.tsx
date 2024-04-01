import React from "react";

interface Context {
    userName: string;
    setUserProfile: (username: string) => void;
}

const noUserLogin = "No user logged in";

const ProfileContext = React.createContext<Context>({
    userName: noUserLogin,
    setUserProfile: () => {},
});

interface Props {
    children: React.ReactNode;
};

export const ProfileProvider : React.FC<Props> = (props) => {
    const { children } = props; 
    const [userProfile, setUserProfile] = React.useState<string>("");

    return(
        <ProfileContext.Provider value={{ userName: userProfile, setUserProfile }}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfileContext = () => React.useContext(ProfileContext);