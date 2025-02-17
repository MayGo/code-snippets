export const TabsView = () => {
    const [tab, setTab] = useState('home');

    const onTabClick = (tab) => {
        setTab(tab);
    };

    return (
        <Container>
            <Tab onClick={() => onTabClick('home')}>Home</Tab>
            <Tab onClick={() => onTabClick('settings')}>Settings</Tab>
            <Content>
                {tab === 'home' && <Home />}
                {tab === 'settings' && <ExpensiveDomTree />}
            </Content>
        </Container>
    );
};
