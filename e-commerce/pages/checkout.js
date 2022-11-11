import Layout from '../component/Layout'

export default function CheckoutPage() {
  const {selectedProducts} = useContext(ProductsContext);
  const [productsInfo,setProductsInfo] = useState([]);

  useEffect(() => {
    fetch('/api/products?ids='+selectedProducts.join(','))
      .then(response => response.json())
      .then(json => setProductsInfo(json));
  }, []);
  
  return (
    <Layout>
      {selectedProducts.join(',')}
    </Layout>
  );
}