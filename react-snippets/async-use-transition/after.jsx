export const TabsView = () => {
    const [tab, setTab] = useState('home');
    const [isPending, startTransition] = useTransition();

    const onTabClick = (tab) => {
        startTransition(() => {
            setTab(tab);
        });
    };

    return (
        <Container>
            <Tab onClick={() => onTabClick('home')}>Home</Tab>
            <Tab onClick={() => onTabClick('settings')}>Settings</Tab>
            <Content>
                {isPending && <LoadingOverlay />}
                {tab === 'home' && <Home />}
                {tab === 'settings' && <ExpensiveDomTree />}
            </Content>
        </Container>
    );
};
