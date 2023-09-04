import React from "react";

interface Context {
  userName: string;
  setUserProfile: (userProfile: string) => void;
}

const noUserLogin = "no user login";

const ProfileContext = React.createContext<Context>({
  userName: noUserLogin,
  setUserProfile: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const ProfileProvider: React.FC<Props> = ({ children }) => {
  const [userProfile, setUserProfile] = React.useState<string>("");

  return (
    <ProfileContext.Provider
      value={{
        userName: userProfile,
        setUserProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => React.useContext(ProfileContext);
