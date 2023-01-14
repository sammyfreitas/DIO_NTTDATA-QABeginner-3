package com.github.sammyfreitas.citiesapi.countries.repository;

import com.github.ruipablob.citiesapi.countries.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<Country, Long> {


}