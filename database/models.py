# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, Date, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 15, 2024 18:21:23
# Database: sqlite:////tmp/tmp.X02rQENLn7-01JCRGWNN8ZKHE299ADZRES5M3/SpaceTravelMgmt/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class MissionType(SAFRSBaseX, Base):
    """
    description: Table for categorizing mission types
    """
    __tablename__ = 'mission_type'
    _s_collection_name = 'MissionType'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)



class Spacecraft(SAFRSBaseX, Base):
    """
    description: Table for storing spacecraft details
    """
    __tablename__ = 'spacecraft'
    _s_collection_name = 'Spacecraft'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    model = Column(String)
    capacity = Column(Integer)

    # parent relationships (access parent)

    # child relationships (access children)
    MissionList : Mapped[List["Mission"]] = relationship(back_populates="spacecraft")
    SpacecraftComponentList : Mapped[List["SpacecraftComponent"]] = relationship(back_populates="spacecraft")



class Mission(SAFRSBaseX, Base):
    """
    description: Table for storing mission details
    """
    __tablename__ = 'mission'
    _s_collection_name = 'Mission'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)
    scheduled_launch_date = Column(DateTime)
    duration_days = Column(Integer)
    mission_status = Column(String)
    spacecraft_id = Column(ForeignKey('spacecraft.id'))

    # parent relationships (access parent)
    spacecraft : Mapped["Spacecraft"] = relationship(back_populates=("MissionList"))

    # child relationships (access children)
    LaunchList : Mapped[List["Launch"]] = relationship(back_populates="mission")
    MissionSummaryList : Mapped[List["MissionSummary"]] = relationship(back_populates="mission")
    SpaceSectorList : Mapped[List["SpaceSector"]] = relationship(back_populates="mission")
    MissionCrewList : Mapped[List["MissionCrew"]] = relationship(back_populates="mission")



class SpacecraftComponent(SAFRSBaseX, Base):
    """
    description: Table for detailing spacecraft components
    """
    __tablename__ = 'spacecraft_component'
    _s_collection_name = 'SpacecraftComponent'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    spacecraft_id = Column(ForeignKey('spacecraft.id'))
    name = Column(String, nullable=False)
    description = Column(String)
    maintenance_date = Column(DateTime)

    # parent relationships (access parent)
    spacecraft : Mapped["Spacecraft"] = relationship(back_populates=("SpacecraftComponentList"))

    # child relationships (access children)



class Launch(SAFRSBaseX, Base):
    """
    description: Table for storing launch information
    """
    __tablename__ = 'launch'
    _s_collection_name = 'Launch'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    launch_date = Column(DateTime, nullable=False)
    mission_id = Column(ForeignKey('mission.id'))
    launch_site = Column(String)

    # parent relationships (access parent)
    mission : Mapped["Mission"] = relationship(back_populates=("LaunchList"))

    # child relationships (access children)
    AstronautList : Mapped[List["Astronaut"]] = relationship(back_populates="launch")
    LaunchIntegratorList : Mapped[List["LaunchIntegrator"]] = relationship(back_populates="assigned_launch")



class MissionSummary(SAFRSBaseX, Base):
    """
    description: Table for storing mission summaries
    """
    __tablename__ = 'mission_summary'
    _s_collection_name = 'MissionSummary'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    mission_id = Column(ForeignKey('mission.id'))
    total_astronauts = Column(Integer)
    total_duration = Column(Integer)

    # parent relationships (access parent)
    mission : Mapped["Mission"] = relationship(back_populates=("MissionSummaryList"))

    # child relationships (access children)



class SpaceSector(SAFRSBaseX, Base):
    """
    description: Table for defining sectors in space for missions
    """
    __tablename__ = 'space_sector'
    _s_collection_name = 'SpaceSector'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)
    mission_id = Column(ForeignKey('mission.id'))

    # parent relationships (access parent)
    mission : Mapped["Mission"] = relationship(back_populates=("SpaceSectorList"))

    # child relationships (access children)



class Astronaut(SAFRSBaseX, Base):
    """
    description: Table for storing astronaut information
    """
    __tablename__ = 'astronaut'
    _s_collection_name = 'Astronaut'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    nationality = Column(String)
    mission_count = Column(Integer)
    launch_id = Column(ForeignKey('launch.id'))

    # parent relationships (access parent)
    launch : Mapped["Launch"] = relationship(back_populates=("AstronautList"))

    # child relationships (access children)
    AstronautBiographyList : Mapped[List["AstronautBiography"]] = relationship(back_populates="astronaut")
    AstronautRankList : Mapped[List["AstronautRank"]] = relationship(back_populates="astronaut")
    MissionCrewList : Mapped[List["MissionCrew"]] = relationship(back_populates="astronaut")



class LaunchIntegrator(SAFRSBaseX, Base):
    """
    description: Table for recording launch integrators and their assignments
    """
    __tablename__ = 'launch_integrator'
    _s_collection_name = 'LaunchIntegrator'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    assigned_launch_id = Column(ForeignKey('launch.id'))

    # parent relationships (access parent)
    assigned_launch : Mapped["Launch"] = relationship(back_populates=("LaunchIntegratorList"))

    # child relationships (access children)



class AstronautBiography(SAFRSBaseX, Base):
    """
    description: Table for storing additional biographical details about astronauts
    """
    __tablename__ = 'astronaut_biography'
    _s_collection_name = 'AstronautBiography'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    astronaut_id = Column(ForeignKey('astronaut.id'))
    biography = Column(Text)
    date_of_birth = Column(Date)

    # parent relationships (access parent)
    astronaut : Mapped["Astronaut"] = relationship(back_populates=("AstronautBiographyList"))

    # child relationships (access children)



class AstronautRank(SAFRSBaseX, Base):
    """
    description: Table for managing astronaut ranks
    """
    __tablename__ = 'astronaut_rank'
    _s_collection_name = 'AstronautRank'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    rank_name = Column(String, nullable=False)
    description = Column(String)
    astronaut_id = Column(ForeignKey('astronaut.id'))

    # parent relationships (access parent)
    astronaut : Mapped["Astronaut"] = relationship(back_populates=("AstronautRankList"))

    # child relationships (access children)



class MissionCrew(SAFRSBaseX, Base):
    """
    description: Table for storing crew assigned to missions
    """
    __tablename__ = 'mission_crew'
    _s_collection_name = 'MissionCrew'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    mission_id = Column(ForeignKey('mission.id'))
    astronaut_id = Column(ForeignKey('astronaut.id'))
    role = Column(String)

    # parent relationships (access parent)
    astronaut : Mapped["Astronaut"] = relationship(back_populates=("MissionCrewList"))
    mission : Mapped["Mission"] = relationship(back_populates=("MissionCrewList"))

    # child relationships (access children)
