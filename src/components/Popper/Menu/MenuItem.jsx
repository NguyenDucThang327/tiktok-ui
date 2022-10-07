import Button from '~/components/Button';

function MenuItem({ data }) {
    return (
        <Button leftIcon={data.icon} to={data.to} onClick={() => {alert(213)}}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
