# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


class Astronaut(Base):
    """description: Table for storing astronaut information"""

    __tablename__ = 'astronaut'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    nationality = Column(String)
    mission_count = Column(Integer, default=0)  # Derived for logic rule
    launch_id = Column(Integer, ForeignKey('launch.id'))


class Spacecraft(Base):
    """description: Table for storing spacecraft details"""

    __tablename__ = 'spacecraft'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    model = Column(String)
    capacity = Column(Integer)


class Mission(Base):
    """description: Table for storing mission details"""

    __tablename__ = 'mission'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String)
    scheduled_launch_date = Column(DateTime)
    duration_days = Column(Integer)
    mission_status = Column(String)
    spacecraft_id = Column(Integer, ForeignKey('spacecraft.id'))


class Launch(Base):
    """description: Table for storing launch information"""

    __tablename__ = 'launch'

    id = Column(Integer, primary_key=True, autoincrement=True)
    launch_date = Column(DateTime, nullable=False)
    mission_id = Column(Integer, ForeignKey('mission.id'))
    launch_site = Column(String)


class MissionCrew(Base):
    """description: Table for storing crew assigned to missions"""

    __tablename__ = 'mission_crew'

    id = Column(Integer, primary_key=True, autoincrement=True)
    mission_id = Column(Integer, ForeignKey('mission.id'))
    astronaut_id = Column(Integer, ForeignKey('astronaut.id'))
    role = Column(String)


class MissionSummary(Base):
    """description: Table for storing mission summaries"""

    __tablename__ = 'mission_summary'

    id = Column(Integer, primary_key=True, autoincrement=True)
    mission_id = Column(Integer, ForeignKey('mission.id'))
    total_astronauts = Column(Integer, default=0)  # Derived for logic rule
    total_duration = Column(Integer, default=0)    # Derived for logic rule


class LaunchIntegrator(Base):
    """description: Table for recording launch integrators and their assignments"""

    __tablename__ = 'launch_integrator'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    assigned_launch_id = Column(Integer, ForeignKey('launch.id'))


class AstronautBiography(Base):
    """description: Table for storing additional biographical details about astronauts"""

    __tablename__ = 'astronaut_biography'

    id = Column(Integer, primary_key=True, autoincrement=True)
    astronaut_id = Column(Integer, ForeignKey('astronaut.id'))
    biography = Column(Text)
    date_of_birth = Column(Date)


class MissionType(Base):
    """description: Table for categorizing mission types"""

    __tablename__ = 'mission_type'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String)


class SpaceSector(Base):
    """description: Table for defining sectors in space for missions"""

    __tablename__ = 'space_sector'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String)
    mission_id = Column(Integer, ForeignKey('mission.id'))


class SpacecraftComponent(Base):
    """description: Table for detailing spacecraft components"""

    __tablename__ = 'spacecraft_component'

    id = Column(Integer, primary_key=True, autoincrement=True)
    spacecraft_id = Column(Integer, ForeignKey('spacecraft.id'))
    name = Column(String, nullable=False)
    description = Column(String)
    maintenance_date = Column(DateTime)


class AstronautRank(Base):
    """description: Table for managing astronaut ranks"""

    __tablename__ = 'astronaut_rank'

    id = Column(Integer, primary_key=True, autoincrement=True)
    rank_name = Column(String, nullable=False)
    description = Column(String)
    astronaut_id = Column(Integer, ForeignKey('astronaut.id'))


# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

from datetime import date, datetime

# Test Data for Astronaut table
a1 = Astronaut(name="John Doe", nationality="American", mission_count=2, launch_id=1)
a2 = Astronaut(name="Anna Smith", nationality="British", mission_count=3, launch_id=1)
a3 = Astronaut(name="Wei Chang", nationality="Chinese", mission_count=1, launch_id=2)
a4 = Astronaut(name="Marco Polo", nationality="Italian", mission_count=5, launch_id=3)

# Test Data for Spacecraft table
s1 = Spacecraft(name="Explorer One", model="X1", capacity=5)
s2 = Spacecraft(name="Journey Two", model="J2", capacity=6)
s3 = Spacecraft(name="Voyager", model="V3", capacity=8)
s4 = Spacecraft(name="Ranger", model="R4", capacity=4)

# Test Data for Mission table
m1 = Mission(name="Lunar Mission", description="Exploration of the lunar surface", scheduled_launch_date=datetime(2023, 12, 1), duration_days=7, mission_status="Scheduled", spacecraft_id=1)
m2 = Mission(name="Mars Reconnaissance", description="Surveying the Martian atmosphere", scheduled_launch_date=datetime(2023, 11, 17), duration_days=14, mission_status="Scheduled", spacecraft_id=2)
m3 = Mission(name="Asteroid Mining", description="Testing asteroid mining technology", scheduled_launch_date=datetime(2024, 1, 10), duration_days=30, mission_status="Planned", spacecraft_id=3)
m4 = Mission(name="Jovian Probe", description="Study of Jupiter", scheduled_launch_date=datetime(2024, 2, 5), duration_days=40, mission_status="Planned", spacecraft_id=4)

# Test Data for Launch table
l1 = Launch(launch_date=datetime(2023, 12, 1), mission_id=1, launch_site="Cape Canaveral")
l2 = Launch(launch_date=datetime(2023, 11, 17), mission_id=2, launch_site="Vandenberg")
l3 = Launch(launch_date=datetime(2024, 1, 10), mission_id=3, launch_site="Baikonur")
l4 = Launch(launch_date=datetime(2024, 2, 5), mission_id=4, launch_site="Tanegashima")

# Test Data for MissionCrew table
mc1 = MissionCrew(mission_id=1, astronaut_id=1, role="Commander")
mc2 = MissionCrew(mission_id=1, astronaut_id=2, role="Pilot")
mc3 = MissionCrew(mission_id=2, astronaut_id=3, role="Mission Specialist")
mc4 = MissionCrew(mission_id=3, astronaut_id=4, role="Engineer")

# Test Data for MissionSummary table
ms1 = MissionSummary(mission_id=1, total_astronauts=2, total_duration=7)
ms2 = MissionSummary(mission_id=2, total_astronauts=1, total_duration=14)
ms3 = MissionSummary(mission_id=3, total_astronauts=1, total_duration=30)
ms4 = MissionSummary(mission_id=4, total_astronauts=0, total_duration=0)

# Test Data for LaunchIntegrator table
li1 = LaunchIntegrator(name="James Clark", assigned_launch_id=1)
li2 = LaunchIntegrator(name="Patricia Lin", assigned_launch_id=2)
li3 = LaunchIntegrator(name="Sanjay Kumar", assigned_launch_id=3)
li4 = LaunchIntegrator(name="Wei Li", assigned_launch_id=4)

# Test Data for AstronautBiography table
ab1 = AstronautBiography(astronaut_id=1, biography="First American on Mars.", date_of_birth=date(1980, 5, 12))
ab2 = AstronautBiography(astronaut_id=2, biography="Expert in astrophysics.", date_of_birth=date(1975, 6, 25))
ab3 = AstronautBiography(astronaut_id=3, biography="Veteran pilot and engineer.", date_of_birth=date(1985, 8, 15))
ab4 = AstronautBiography(astronaut_id=4, biography="Renowned geologist.", date_of_birth=date(1978, 11, 25))

# Test Data for MissionType table
mt1 = MissionType(name="Exploration", description="Scientific exploration missions")
mt2 = MissionType(name="Colonization", description="Missions aimed at colonizing extraterrestrial bodies")
mt3 = MissionType(name="Research", description="Advanced research missions in space")
mt4 = MissionType(name="Defense", description="Space defense and surveillance missions")

# Test Data for SpaceSector table
ss1 = SpaceSector(name="Lunar Orbit", description="Sector around the Moon", mission_id=1)
ss2 = SpaceSector(name="Martian Surface", description="Sector on Mars", mission_id=2)
ss3 = SpaceSector(name="Asteroid Belt", description="Sector within asteroid region", mission_id=3)
ss4 = SpaceSector(name="Jovian System", description="Sector around Jupiter", mission_id=4)

# Test Data for SpacecraftComponent table
sc1 = SpacecraftComponent(spacecraft_id=1, name="Engine", description="Main propulsion engine", maintenance_date=datetime(2023, 8, 15))
sc2 = SpacecraftComponent(spacecraft_id=2, name="Navigation System", description="Advanced navigational tech", maintenance_date=datetime(2023, 9, 20))
sc3 = SpacecraftComponent(spacecraft_id=3, name="Communication Module", description="Long-range comm system", maintenance_date=datetime(2023, 10, 10))
sc4 = SpacecraftComponent(spacecraft_id=4, name="Life Support", description="Life support and safety systems", maintenance_date=datetime(2023, 11, 5))

# Test Data for AstronautRank table
ar1 = AstronautRank(rank_name="Lieutenant", description="Junior rank", astronaut_id=1)
ar2 = AstronautRank(rank_name="Captain", description="Mid-level rank", astronaut_id=2)
ar3 = AstronautRank(rank_name="Major", description="Senior rank", astronaut_id=3)
ar4 = AstronautRank(rank_name="Colonel", description="Advanced rank", astronaut_id=4)




session.add_all([a1, a2, a3, a4, s1, s2, s3, s4, m1, m2, m3, m4, l1, l2, l3, l4, mc1, mc2, mc3, mc4, ms1, ms2, ms3, ms4, li1, li2, li3, li4, ab1, ab2, ab3, ab4, mt1, mt2, mt3, mt4, ss1, ss2, ss3, ss4, sc1, sc2, sc3, sc4, ar1, ar2, ar3, ar4])
session.commit()
