const WhistList = () => {
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  const orderfn = () => {
    if (sortOrder === "dsc") {
      return [...wishlist].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "asc") {
      return [...wishlist].sort((a, b) => b.price - a.price);
    } else {
      return wishlist;
    }
  };
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("whishlist"));
    if (saved) setWishlist(saved);
  }, []);
  const removeHandel = (id) => {
    const removed = wishlist.filter((each) => each.id !== id);
    setWishlist(removed);
    localStorage.setItem("whishlist", JSON.stringify(removed));
  };