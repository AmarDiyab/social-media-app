import { Modal, useMantineTheme } from '@mantine/core';
import './ProfileModal.css'

function ProfileModal({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size='55%'
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            <form className='infoForm' action="">
                <h3>Your info</h3>

                <div>
                    <input type="text" className="infoInput" name='firstName' placeholder='First Name' />
                    <input type="text" className="infoInput" name='lastName' placeholder='Last Name' />
                </div>

                <div>
                    <input type="text" className="infoInput" name='worksAt' placeholder='Works At' />
                </div>

                <div>
                    <input type="text" className="infoInput" name='livesIn' placeholder='Lives In' />
                </div>

                <div>
                    <input type="text" className='infoInput' name='relationshipStatus' placeholder='Relationship Status' />
                </div>

                <div>
                    Profile Photo
                    <input type="file" name='ProfileImg' />
                    Cover Photo
                    <input type="file" name='CoverImg' />
                </div>

                <div>
                    <button className='Button infoButton' style={{ margin: 'auto' }}>Update </button>
                </div>
            </form>
        </Modal>
    );
}

export default ProfileModal