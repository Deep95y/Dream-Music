import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Toolbar } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './playlist.css';

const Playlist = ({ songlist, setCurrentTrackIndex, setSonglist, playSound, clickedRowIndex, setClickedRowIndex }) => {

  const handleRowClick = (index) => {
    setClickedRowIndex(index);
    setCurrentTrackIndex(index);
    playSound(index);
    setCurrentTime(0);
  };

  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedList = Array.from(songlist);
    const [removed] = reorderedList.splice(result.source.index, 1);
    reorderedList.splice(result.destination.index, 0, removed);
    console.log(reorderedList);

    setSonglist(reorderedList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <TableContainer component={Paper} className="table-container" style={{ background: 'transparent', fontSize: '.3125rem', width: '85%', margin: 'auto' }}>
        <Toolbar>
          <Typography sx={{ color: 'white', fontSize: '1rem' }}>Popular</Typography>
          <div style={{ flexGrow: 1 }} />
          <Typography sx={{ color: 'white', fontSize: '0.8rem' }}>See All</Typography>
        </Toolbar>
        <Table style={{ borderCollapse: 'collapse' }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: 'white', borderBottom: 'none', fontSize: '0.75rem', padding: 8, textAlign:"center" }}>#</TableCell>
              <TableCell style={{ borderBottom: 'none', padding: 8 }}></TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none', fontSize: '0.75rem', padding: 8, textAlign:"left" }}>TITLE</TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none', fontSize: '0.75rem', padding: 8, textAlign:"left" }}>PLAYING</TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none', fontSize: '0.75rem', padding: 8, textAlign:"center" }}>TIME</TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none', fontSize: '0.75rem', padding: 8, textAlign:'right' }}>ALBUM</TableCell>
            </TableRow>
          </TableHead>
          <Droppable droppableId="playlist">
            {(provided) => (
              <TableBody {...provided.droppableProps} ref={provided.innerRef} style={{ fontSize: '0.7rem' }}>
                {songlist.map((song, index) => (
                  <Draggable key={index} draggableId={`abc-${index}`} index={index}>
                    {(provided, snapshot) => (
                      <TableRow
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onClick={() => handleRowClick(index)}
                        className="table-row"
                        style={{
                          background: clickedRowIndex === index ? '#800000' : 'transparent',
                          color: clickedRowIndex === index ? 'white' : 'inherit',
                          borderBottom: '.0625rem solid #461010',
                          cursor: 'pointer',
                          display: snapshot.isDragging ? 'flex' : 'table-row',
                          alignItems: snapshot.isDragging ? 'center' : 'inherit',
                          ...provided.draggableProps.style,
                        }}
                      >
                       <TableCell className="table-cell" style={{ color: 'white', borderBottomColor: '#350808', padding: 0, textAlign:"center" }}>
                          {clickedRowIndex === index ? (
                            <img src='/assets/icons/playing.svg' alt="Playing" style={{ width: 20, height: 20 }} />
                          ) : (
                            index + 1
                          )}
                        </TableCell>
                        <TableCell className="table-cell" style={{ color: 'white', borderBottomColor: '#350808', padding: 3 }}>
                          <div
                            style={{
                              maxWidth: 40,
                              maxHeight: 40,
                              backgroundColor: '#ccc',
                              overflow: 'hidden',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <img
                              src={song.songImgSrc}
                              alt={song.title}
                              style={{
                                width: '100%',
                                height: '100%',
                              }}
                            />
                          </div>
                        </TableCell>
                        <TableCell className="table-cell" style={{ alignItems: 'center', color: 'white',  borderBottomColor: '#350808', padding: 0 }}>
                          <Typography sx={{ fontSize: '0.7rem', textAlign:"left", ml:1 }}>{song.title}</Typography>
                        </TableCell>
                        <TableCell className="table-cell" style={{ color: 'white', fontWeight: song[clickedRowIndex] ? 'bold' : 'normal',  borderBottomColor: '#350808', padding: 0 }}>
                          <Typography sx={{ fontSize: '0.7rem', textAlign:"left", ml:1 }}>{song.play}</Typography>
                        </TableCell>
                        <TableCell className="table-cell" style={{ color: 'white', fontWeight: song[clickedRowIndex] ? 'bold' : 'normal',  borderBottomColor: '#350808', padding: 0 }}>
                          <Typography sx={{ fontSize: '0.7rem', textAlign:"center" }}>{song.duration}</Typography>
                        </TableCell>
                        <TableCell className="table-cell" style={{ color: 'white', fontWeight: song[clickedRowIndex] ? 'bold' : 'normal',  borderBottomColor: '#350808', padding: 0 }}>
                          <Typography sx={{ fontSize: '0.7rem', textAlign:'right', paddingRight:1 }}>{truncateText(song.album, 17)}</Typography>
                        </TableCell>
                      </TableRow>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </TableBody>
            )}
          </Droppable>
        </Table>
      </TableContainer>
    </DragDropContext>
  );
};

export default Playlist;
