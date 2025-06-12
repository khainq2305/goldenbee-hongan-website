import { useEffect } from 'react';

interface UseOutsideClickHandlersProps {
  searchContainerRef: React.RefObject<HTMLElement | null>;
  mobileMenuButtonRef: React.RefObject<HTMLElement | null>;
  accountButtonRef: React.RefObject<HTMLElement | null>;
  isSearchPopupOpen: boolean;
  isMobileMenuOpen: boolean;
  isAccountPopupOpen: boolean;
  closeSearchPopup: () => void;
  closeMobileMenu: () => void;
  closeAccountPopup: () => void;
}


const useOutsideClickHandlers = ({
  searchContainerRef,
  mobileMenuButtonRef,
  accountButtonRef,
  isSearchPopupOpen,
  isMobileMenuOpen,
  isAccountPopupOpen,
  closeSearchPopup,
  closeMobileMenu,
  closeAccountPopup,
}: UseOutsideClickHandlersProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const tgt = event.target as Node;

      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(tgt)
      ) {
        closeSearchPopup();
      }

      if (
        isMobileMenuOpen &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(tgt) &&
        !document.getElementById("mobile-menu")?.contains(tgt)
      ) {
        closeMobileMenu();
      }

      if (
        isAccountPopupOpen &&
        accountButtonRef.current &&
        !accountButtonRef.current.contains(tgt) &&
        !document.getElementById("account-popup")?.contains(tgt)
      ) {
        closeAccountPopup();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    isSearchPopupOpen,
    isMobileMenuOpen,
    isAccountPopupOpen,
    searchContainerRef,
    mobileMenuButtonRef,
    accountButtonRef,
    closeSearchPopup,
    closeMobileMenu,
    closeAccountPopup,
  ]);
};

export default useOutsideClickHandlers;
